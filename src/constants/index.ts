export const letterLenLimit = {
  min: 5,
  max: 200,
  getErrMsg() {
    return `${this.min}자 이상 ${this.max}자 이하로 입력하세요.`;
  }
};
