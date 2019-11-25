export default function(index) {
    const { usersData, setTableData } = this.props;

    let idForDelete = index;
    let newCheckboxeNodes = {};

    newCheckboxeNodes[index] = this.checkboxNodes[index];
    setTableData(usersData.filter((item, index) => index !== idForDelete));    
}