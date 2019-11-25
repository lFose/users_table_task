export default function() {
    let k;
    let arr = [];
    for(k in this.checkboxNodes) {
        this.checkboxNodes[k] && arr.push(this.checkboxNodes[k].checked);
    };
    if(arr.includes(true)) {
        this.setState({
            disableButtonFlag: false
        });
    } else {
        this.setState({
            disableButtonFlag: true
        });
    };
}