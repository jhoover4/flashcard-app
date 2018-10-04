var app = new Vue({
    el: '#root',
    delimiters: ['${', '}'],
    data: {
        appTitle: "Javascript Card App",
        cardCount: 0,
        cards: [],
        currentCard: 0,
        correct: 0,
        wrong: 0
    },
    methods: {
        increaseScore: function () {
            this.correct++;
            this.currentCard++;
        },
        decreaseScore: function () {
            this.wrong++;
            this.currentCard++;
        }
    }
});

