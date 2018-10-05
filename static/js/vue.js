var app = new Vue({
        el: '#root',
        delimiters: ['${', '}'],
        data: {
            cardCount: 1,
            cards: [],
            subjects: [],
            correct: 0,
            wrong: 0,
            cardFlipped: false,
            addCardError: false,
            formFieldAnswer: "",
            formFieldQuestion: "",
            formFieldSubject: ""
        },
        methods: {
            increaseScore: function () {
                this.correct++;
                this.cardCount++;
                this.cardFlipped = false
            },
            decreaseScore: function () {
                this.wrong++;
                this.cardCount++;
                this.cardFlipped = false
            },
            skipCard: function () {
                this.cardCount++;
                this.cardFlipped = false
            },
            toggleCard: function () {
                this.cardFlipped = !this.cardFlipped
            },
            createCard: function (e) {
                e.preventDefault();
                if (this.formFieldAnswer === "" || this.formFieldQuestion === "" || this.formFieldSubject === "") {
                    this.addCardError = true;
                } else {
                    let newCard =
                        {
                            question: this.formFieldQuestion,
                            answer: this.formFieldAnswer,
                            subject: this.formFieldSubject
                        };

                    this.cards.push(newCard);

                    this.postNewCard(newCard);
                }
            },
            postNewCard: function (cardData) {
                let csrftoken = Cookies.get('csrftoken');

                fetch('/api/cards/',
                    {
                        method: 'POST',
                        body: JSON.stringify(cardData),
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRFToken': csrftoken,
                        },
                        credentials: 'same-origin',
                    })
                    .catch(error => console.log(error));
            }
        },
        mounted() {
            fetch('/api/cards/')
                .then(response => response.json())
                .then(jsonData => (this.cards = jsonData))
                .catch(error => console.log(error));

            fetch('/api/subjects/')
                .then(response => response.json())
                .then(jsonData => (this.subjects = jsonData.map(subject => subject.name)))
                .catch(error => console.log(error));
        }
    })
;

