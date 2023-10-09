const app = new Vue({

  el: '#app',
  data: {
      emails: [],
  },

  methods: {
      createMail() {
          /* const self = this; */
          const tempArray = [];
          for (let i = 0; i < 10; i++) {
              axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                  .then(function (mail) {
                  let mailGenerated = mail.data.response;
                  tempArray.push(mailGenerated);
                  console.log(mailGenerated);
              })
          }
          console.log(tempArray);
          setTimeout(() => {
              this.emails = tempArray;
          }, 2000)
      }
  },
  mounted() {
      this.createMail()
  }
 
})