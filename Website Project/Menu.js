var data = { "gradient": {"tags":["turtle","last year", "2022", "2023", "personal", "gradient"], "links": ["https://codehs.com/sandbox/id/new-sandbox-program-L6lwb9/run","https://codehs.com/sandbox/id/new-sandbox-program-L6lwb9"] },
 "3d y rotation personal project": {"tags":["personal", "3d", "turtle", "this year", "2023", "2024", "y", "rotation"], "links": ["https://codehs.com/sandbox/id/3d-y-rotation-PfS7UG/run","https://codehs.com/sandbox/id/3d-y-rotation-PfS7UG"] }, 
 "3d z rotation personal project": {"tags":["personal", "project", "3d", "turtle", "this year", "2023", "2024", "z", "rotation"], "links": ["https://codehs.com/sandbox/id/3d-test-ZGq8fB/run","https://codehs.com/sandbox/id/3d-test-ZGq8fB"] },
 "art project task": {"tags":["art","project","task", "turtle", "this year", "2023", "2024","gradient", "effeil", "tower", "grid", "3d"], "links": ["https://codehs.com/sandbox/id/art-output-task-xIk4Gi/run","https://codehs.com/sandbox/id/art-output-task-xIk4Gi"] }, 
 "bottles of soda":{"tags":["bottles", "of", "soda", "this year", "2023", "2024", "project"], "links": ["https://codehs.com/sandbox/id/bottles-of-soda-w6wcy0/run","https://codehs.com/sandbox/id/bottles-of-soda-w6wcy0"] }, 
 "catipiller project": {"tags":["project","turtle","this year", "2023", "2024","catipiller"], "links": ["https://codehs.com/sandbox/id/caterpillar-task-Yt9pop/run","https://codehs.com/sandbox/id/caterpillar-task-Yt9pop"] }, 
 "cool line thing": {"tags":["last year", "2023", "2022", "cool", "line", "thing", "turtle", "personal"], "links": ["https://codehs.com/sandbox/id/new-sandbox-program-CpJw6Y/run","https://codehs.com/sandbox/id/new-sandbox-program-CpJw6Y"] }, 
 "crossroads":{"tags":["crossroads", "project","last year", "2023", "2022", "turtle"], "links": ["https://codehs.com/sandbox/id/crossroad-project-j5WoQM/run","https://codehs.com/sandbox/id/crossroad-project-j5WoQM"] }, 
 "effeil tower":{"tags":["effeil", "tower", "last year", "2022", "2023", "turtle", "project"], "links": ["https://codehs.com/sandbox/id/eiffel-tower-SAUsJn/run","https://codehs.com/sandbox/id/eiffel-tower-SAUsJn"] }, 
 "hangman": {"tags":["project", "this year", "2023", "2024", "hangman"], "links": ["https://codehs.com/sandbox/id/hangman-eW4O5V/run","https://codehs.com/sandbox/id/hangman-eW4O5V"] }, 
 "rainbow":{"tags":["project", "last year", "2023", "2022", "rainbow", "turtle"], "links": ["https://codehs.com/sandbox/id/rainbow-31g8Zi/run","https://codehs.com/sandbox/id/rainbow-31g8Zi"] }, 
 "random number guesser":{"tags":["random", "number", "guesser", "this year", "2023", "2024", "project"], "links": ["https://codehs.com/sandbox/id/random-number-guesser-SdXi6U/run","https://codehs.com/sandbox/id/random-number-guesser-SdXi6U"] }, 
 "rock paper scissors spock lizard": {"tags":["rock", "paper", "scissors", "spock", "lizard", "this year", "2023", "2024", "project"], "links": ["https://codehs.com/sandbox/id/rock-paper-scissors-PlpBIv/run","https://codehs.com/sandbox/id/rock-paper-scissors-PlpBIv"] } 
}

var viewWebsite = "gradient"

var setViewWebsite = function() {
		document.getElementById("addLink" + this.viewWebsite).innerHTML = ""
		this.viewWebsite = website
		document.getElementById("addLink" + this.viewWebsite).innerHTML = "Open Viewer"
}

var setWebsite = function () {
	document.getElementById("rewrite").innerHTML = this.viewWebsite
    document.getElementById("embed").src = data[this.viewWebsite]["links"][0]
	document.getElementById("seeCode").href = data[this.viewWebsite]["links"][1]
}