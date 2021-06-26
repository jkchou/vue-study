const HelloVueApp = {
    data(){
        return {
            message: 'Hello Vue.js!'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        }
    }
}

const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        setInterval(() =>{
            this.counter++;
        }, 1000)
    }
}

const AttributeBinding = {
    data() {
        return {
            message: "you loaded this page on" + new Date().toLocaleString()
        }
    }
}

const TwoWayBinding = {
    data() {
      return {
        seen : true,
        message: 'Hello Vue!'
      }
    },
    methods: {
        show() {
            if(this.seen)
                this.seen = false;
            else this.seen = true;
        }
    }
  }
