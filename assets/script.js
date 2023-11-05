// Select the <input> and <p> elements by their IDs
var input = document.getElementById("searchInput");
var result = document.getElementById("result-view");

var DataFrame = dfjs.DataFrame;
var qinfo;
var lookup;
DataFrame.fromCSV('QINFO.csv').then(df => { qinfo = df; });
DataFrame.fromCSV('LOOKUP.csv').then(df => { lookup = df; });

function firstWordToLowercase(inputString) {
    // Split the input string into words
    const words = inputString.trimStart().split(' ');

    // Check if there are any words in the string
    if (words.length > 0) {
        // Get the first word and convert it to lowercase
        const firstWord = words[0].toLowerCase();
        return firstWord;
    } else {
        // If the input string is empty, return an empty string
        return '';
    }
}

const noTerm = `

`;

const notFound = `
<fieldset>
    <legend>WORD NOT FOUND</legend>
</fieldset>
`;

const resultTemplate = `
<div class="table-responsive">
                    <table class="table table-hover">
                        <tbody id='result-table'>

                            <tr>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Find the Index of the First Occurrence in a String</strong></div>
                                    <div class="difficulty text-right">MEDIUM</div>
                                </td>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Question 1</strong></div>
                                    <div class="difficulty text-right">HARD</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Find the Index of the First Occurrence in a String</strong></div>
                                    <div class="difficulty text-right">MEDIUM</div>
                                </td>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Question 1</strong></div>
                                    <div class="difficulty text-right">HARD</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Find the Index of the First Occurrence in a String</strong></div>
                                    <div class="difficulty text-right">MEDIUM</div>
                                </td>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Question 1</strong></div>
                                    <div class="difficulty text-right">HARD</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Find the Index of the First Occurrence in a String</strong></div>
                                    <div class="difficulty text-right">MEDIUM</div>
                                </td>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Question 1</strong></div>
                                    <div class="difficulty text-right">HARD</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Find the Index of the First Occurrence in a String</strong></div>
                                    <div class="difficulty text-right">MEDIUM</div>
                                </td>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Question 1</strong></div>
                                    <div class="difficulty text-right">HARD</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Find the Index of the First Occurrence in a String</strong></div>
                                    <div class="difficulty text-right">MEDIUM</div>
                                </td>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Question 1</strong></div>
                                    <div class="difficulty text-right">HARD</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Find the Index of the First Occurrence in a String</strong></div>
                                    <div class="difficulty text-right">MEDIUM</div>
                                </td>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Question 1</strong></div>
                                    <div class="difficulty text-right">HARD</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Find the Index of the First Occurrence in a String</strong></div>
                                    <div class="difficulty text-right">MEDIUM</div>
                                </td>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Question 1</strong></div>
                                    <div class="difficulty text-right">HARD</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Find the Index of the First Occurrence in a String</strong></div>
                                    <div class="difficulty text-right">MEDIUM</div>
                                </td>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Question 1</strong></div>
                                    <div class="difficulty text-right">HARD</div>
                                </td>
                            </tr>
                            
                            <tr>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Find the Index of the First Occurrence in a String</strong></div>
                                    <div class="difficulty text-right">MEDIUM</div>
                                </td>
                                <td>
                                    <div class="image"><img src="https://picsum.photos/200" alt=""></div>
                                    <div class="question"><strong>Question 1</strong></div>
                                    <div class="difficulty text-right">HARD</div>
                                </td>
                            </tr>
                            
                            
                            
                        </tbody>
                    </table>
                </div>

`;

function openURLnewTab(url){
    var f = () => {window.open(url, '_blank')};
    return f;
}

// Add an input event listener to the <input> element
input.addEventListener("input", function () {
    // Update the content of the <p> tag with the input value
    // paragraph.textContent = input.value;
    var searchTerm = firstWordToLowercase(input.value);
    if (searchTerm == '') {
        result.innerHTML = noTerm;
    }
    else {
        var querryResult = lookup.find(row => row.get('word') == searchTerm);
        if (querryResult == undefined) {
            result.innerHTML = notFound;
        }
        else {

            /*
                Match found !
            */



            result.innerHTML = resultTemplate;
            var table = document.getElementById('result-table');
            var tds = table.getElementsByTagName('td');

            var arr = querryResult.toArray();
            var doc_ids = new Array(20);
            for (var i = 19; i >= 0; i--) {
                var idx = Number(arr[i]);
                doc_ids[19 - i] = idx;
            }

            for (var i = 0; i < tds.length; i++) {
                var td = tds[i];

                var doc_id = doc_ids[i] - 1;
                var dict = qinfo.getRow(doc_id).toDict();
                var dvs = td.getElementsByTagName('div');
                var url = 'https://leetcode.com/problems/'+dict['titleSlug']+'/description/';
                dvs[0].innerHTML = '<img src="https://api.dicebear.com/7.x/shapes/svg?seed=' + dict['titleSlug'] + '" alt="">';
                dvs[1].innerHTML = '<strong>' + dict['title'] + '</strong>';
                dvs[2].innerHTML = dict['difficulty'];

                td.addEventListener('click', openURLnewTab(url));
            }

        }
    }
});