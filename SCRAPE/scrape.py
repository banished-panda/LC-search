from leetscrape.GetQuestionsList import GetQuestionsList
from leetscrape.GetQuestionInfo import GetQuestionInfo
from leetscrape.utils import combine_list_and_info, get_all_questions_body

import pandas as pd

ls = GetQuestionsList()

print("Scraping Question lists")
ls.scrape() # Scrape the list of questions
ls.to_csv(directory_path="../data/") # Save the scraped tables to a directory

# This table can be generated using the previous commnd
questions_info = pd.read_csv("../data/questions.csv")

# Scrape question body
print('Scraping question body')
questions_body_list = get_all_questions_body(
    questions_info["titleSlug"].tolist(),
    questions_info["paidOnly"].tolist(),
    save_to="../data/questionBody.pickle",
)
print('All scraping complete')

# Save to a pandas dataframe
questions_body = pd.DataFrame(
    questions_body_list
).drop(columns=["titleSlug"])
questions_body["QID"] = questions_body["QID"].astype(int)

# questions = combine_list_and_info(
#     info_df = questions_body, list_df=ls.questions, save_to="../data/all.json"
# )
ls.questions.to_csv('../data/QInfo.csv')
questions_body.to_csv('../data/Qbody.csv')