export const messageMixin = {
  data() {
    return {
      messageMixin: "Hello V2"
    };
  },
  computed: {
    reversedMessageMixin() {
      return this.messageMixin
        .split("")
        .reverse()
        .join("");
    },
    countCalculateLengthMixin() {
      return this.messageMixin + " {" + this.messageMixin.length + "}";
    }
  }
}