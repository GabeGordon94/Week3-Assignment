 <form id="quiz" name="quiz">

        <div class="container flex-column mt-5 question-one d-none" id="1">
            <div class="question justify-content-center row">
                <img src="img/tuktuk.jpg" class="picture" />
            </div>
            <div class="row d-flex flex-wrap justify-content-around mt-3 " >
                <!-- <input class="qOne" -->
                <div class="checkbox">
                    <input type="checkbox" class="checkbox-q1" id="check-1" value="Car" onclick="nextQuestion('2')"/><span class="check-text">Car</span>
                </div>
                <div class="checkbox">
                    <input type="checkbox" class="checkbox-q1" id="check-1" value="Motorcylce" onclick="nextQuestion('2')"/><span class="check-text">Motorcylce</span>
                </div>
                <div class="checkbox">
                    <input type="checkbox" class="checkbox-q1" id="check-1" value="Tuktuk" onclick="nextQuestion('2')" /><span class="check-text">Tuk Tuk</span>
                </div>
                <div class="checkbox">
                    <input type="checkbox" class="checkbox-q1" id="check-1" value="dontCare" onclick="nextQuestion('2')" /><span class="check-text">Dont care, not getting in.</span>    
                </div>
                
            </div>
        </div>
        <hr />
        <div class="container flex-column mt-5 question-two d-none" id="2">
            <div class="question justify-content-center row">
                <img src="img/angkorWat.jpg" class="picture" />
            </div>
            <div class="form-group justify-content-center mt-3">
                <select class="form-control" id="qTwo" onchange="nextQuestion('3')">
                    <option> Where is this temple?</option>
                    <option >Cambodia</option>
                    <option >Burma</option>
                    <option >India</option>
                    <option >Thailand</option`>
                </select>
            </div>

        </div>
        <hr />
        <div class="container flex-column mt-5 question-three h-40 d-none" id="3" >
            <div class="question justify-content-center row">
                <div class="picture-three">
                    <div class="question-in-picture">
                        What dish is special to Hanoi, Vietnam?
                    </div>
                </div>
            </div>
            <div class="image-picker show-html show-label justify-content-around row align-items-baseline" id="qThree">
                <input type="radio" class="checkbox-q1" value="luclac" onclick="nextQuestion('4')"><span class="check-text">Luc Lac</span> <br/>
                <input type="radio" class="checkbox-q1" value="phadthai" onclick="nextQuestion('4')"><span class="check-text">Phad Thai</span> <br/>
                <input type="radio" class="checkbox-q1" value="buncha" onclick="nextQuestion('4')"><span class="check-text">Bun Cha</span> <br/>
                <input type="radio" class="checkbox-q1" value="laap" onclick="nextQuestion('4')"><span class="check-text">Laap</span> <br/>
            </div>
        </div>  
        <hr />
        <div class="container flex-column mt-5 question-four d-none" id="4">
            <div class="question justify-content-center row">
                <img src="img/beatles.jpg" class="picture" />
            </div>

            <div class="justify-content-center row  text-center">
                <div for="sel2" class="h3">Where is the yoga ashram the Beatles went to?
                    Country and Town<br /> (hold ctrl to select more than one):</div>
                <select multiple class="form-control" id="qFour" name="sellist2" onchange="nextQuestion('5')">
                    <option value="New York City">New York City</option>
                    <option value="India">India</option>
                    <option value="Chiang Mai">Chiang Mai</option>
                    <option value="Rishikesh">Rishikesh</option>
                    <option value="Pushkar">Pushkar</option>
                    <option value="New Delhi">New Delhi</option>
                    <option value="Goa">Goa</option>
                </select>
            </div>
            <hr />
        </div>
        <div class="container flex-column mt-5 question-five d-none" id="5">
            <div class="question justify-content-center row">
                <img src="img/dal-baht.jpg" class="picture" />
            </div>
            <div class="text-question h3">
                Finish the expression<br />
                <b>Dal Baht Power,...</b>
            </div>
            <div class="row mb-3" onchange="nextQuestion('6')">
                
                    <input type="text" class="form-control" placeholder="..." id="qFive">
                
            </div>
        </div>
        <div class="row justify-content-center d-none" id="6">

            <input id="button" type="button" value="I'm finished" onclick="getScore();">
        </div>
    </form>