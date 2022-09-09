const app = Vue.createApp({
  data() {
    return {
      // tempCard: {
      //   number: "0000 0000 0000 0000",
      //   name: "Jane Appleseed",
      //   date: {
      //     month: "12",
      //     year: "25",
      //   },
      //   cvc: "056",
      // },
      cardDetails: {
        number: null,
        name: null,
        date: {
          month: null,
          year: null,
        },
        cvc: null,
      },
      isSubmitted: false,
    };
  },
  methods: {
    getIsSubmitted() {
      return (this.isSubmitted = !this.isSubmitted);
    },
  },
  computed: {
    splitCardNumber() {
      let start = 0;
      let end = 4;
      let newNumber = "";
      for (let i = 0; i < 4; i++) {
        newNumber +=
          this.cardDetails.number.toString().substring(start, end) + " ";
        start += 4;
        end += 4;
      }
      return newNumber;
    },
  },
});

app.mount("#app");
