export default function(e) {
    const currentStateFlag = e.target.checked === undefined ? 
    (() => {
        const commonCheckboxNewState = !this.commonCheckbox.checked;
        this.commonCheckbox.checked = commonCheckboxNewState;
        return commonCheckboxNewState;
    })() :
    e.target.checked;
    
    let id;
    for (id in this.checkboxNodes) {
        if (this.checkboxNodes[id]) {
            this.checkboxNodes[id].checked = currentStateFlag;
        }
    };

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