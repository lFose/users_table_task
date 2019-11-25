export default function() {
    const { usersData, setTableData } = this.props;
    let id;
    let idsForDelete = [];
    let newCheckboxeNodes = {};

    for (id in this.checkboxNodes) {
        if (this.checkboxNodes[id]) {
            if (this.checkboxNodes[id].checked === true) {
                this.checkboxNodes[id].checked = false;
                idsForDelete.push(Number(id));
            }
            else {
                newCheckboxeNodes[id] = this.checkboxNodes[id];
            }
        }
    }
    this.checkboxNodes = { ...newCheckboxeNodes };
    setTableData(usersData.filter((item, index) => idsForDelete.indexOf(index) === -1));
    this.setState({
        disableButtonFlag: true
    }) 
}