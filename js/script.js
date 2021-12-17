
Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {

            numberEmailGenerated: 10,
            newEmailArray: [
                {
                    email: '',
                    emailCreated: false
                }
            ],
        },
       
        // }
        // mounted: function() {
        //     let emailArrayIsReady = newEmailArray.length;
        //     if (emailArrayIsReady = this.numberEmailGenerated) {
        //         this.newEmailArray.forEach((element) => {
        //             element.emailCreated = true;
        //         });
        //     }

           
        // },
        beforeCreate: function() {
            // https://flynn.boolean.careers/exercises/api/array/integers?min=n&max=n&items=n
            for ( let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => { 
                    let newEmail;
                    this.newEmailArray.push(
                        {
                            email: response.data.response,
                            emailCreated: true
                        }
                    );
                });
            }
        }
    }
);