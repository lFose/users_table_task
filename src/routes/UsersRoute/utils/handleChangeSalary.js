export default function(e) {
    const { person } = this.state;
    const { usersData, setTableData } = this.props;

    e.preventDefault();

    let newData = [...usersData]
    newData[person.id].salary = Number(e.target.textbox.value);

    setTableData(newData)
    this.setState({
        displayDialog: false
    })    
}