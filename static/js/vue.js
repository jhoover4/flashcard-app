var app = new Vue({
    el: '#root',
    delimiters: ['${', '}'],
    data: {
        appTitle: "Javascript Card App",
        cardCount: 1,
        cards: [
            {
                title: "Test",
                question: "Test question content",
                answer: "Test answer content",
            }
        ],
        correct: 0,
        wrong: 0
    },
    methods: {
        increaseScore: function () {
            this.correct++;
            this.cardCount++;
        },
        decreaseScore: function () {
            this.wrong++;
            this.cardCount++;
        },
        skipCard: function () {
            this.cardCount++;
        }
    }
});

