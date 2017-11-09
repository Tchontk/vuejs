export const messageMixin = {
  data() {
    return {
      messageMixin: "Hello"
    };
  },
  computed: {
    reversedMessageMixin() {
      return this.messageMixin
        .split("")
        .reverse()
        .join("");
    },
    countMessageLengthMixin() {
      return this.messageMixin + " {" + this.messageMixin.length + "}";
    }
  }
}