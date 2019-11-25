import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Table from 'components/Table';
import TableHead from 'components/TableHead';
import TableHeadCell from 'components/TableHeadCell';
import TableRow from 'components/TableRow';
import TableBodyCell from 'components/TableBodyCell';
import { Button, RoundButton } from 'components/Button';
import Dialog from 'components/Dialog';
import Icon from 'components/Icon';
import Checkbox from 'components/Checkbox';
import { Typography, TypographyTitle, TypographyCell } from 'components/Typography';

import {
    convertSalary,
    getAge,
    getHeight,
    getWeight,
    handleChangeSalary,
    handleDeleteRow,
    handleDeleteSelectedRows,
    handleSwitchSelectAll,
    checkDisableButtonFlag
} from './utils';

import setUsersDataCollection from 'actions/setUsersDataCollection';

import edit from 'static/ico-edit.svg';
import bin from 'static/ico-bin.svg';
import close from 'static/ico-close.svg';

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`;

const TableWrap = styled.div`
    height: 83.5vh;
    overflow-y: scroll;
    margin-bottom: 25px;
    &::-webkit-scrollbar { 
        width: 0; 
    }
`;

const ButtonWrap = styled.div`
    text-align: right;
`;

const DialogInput = styled.input`
    display: block;
    width: calc(100% - 48px);
    padding: 13px 24px;
    border-radius: 4px;
    border: 1px solid #c6c6c6;
    font-weight: bold;
    outline: none;
`;

const RoundButtonWrapper = styled.div`
    position: absolute;
    right: -33px;
    top: -38px;
`;

class Users extends React.PureComponent {
    commonCheckbox = null;
    checkboxNodes = {};
    disableButtonFlag = true;

    constructor(props) {
        super(props);
        this.state = {
            displayDialog: false,
            disableButtonFlag: true,
            person: {}
        };
        this.handleChangeSalary = handleChangeSalary.bind(this);
        this.handleDeleteRow = handleDeleteRow.bind(this);
        this.handleDeleteSelectedRows = handleDeleteSelectedRows.bind(this);
        this.handleSwitchSelectAll = handleSwitchSelectAll.bind(this);
        this.checkDisableButtonFlag = checkDisableButtonFlag.bind(this);
    }

    componentDidMount() {
        (async() => {
            const { setTableData } = this.props;

            const responce = await fetch('https://api.myjson.com/bins/5z1rq');
            const data = await responce.json();

            const moneyResponce = await fetch('https://api.exchangeratesapi.io/latest');
            const money = await moneyResponce.json();

            data.forEach((item) => {
                item.salary = Number(convertSalary(item.salary, money['rates'].USD))
            })

            setTableData(data);
        })();
    }

    render() {
        const { person } = this.state;
        const { usersData } = this.props;
        
        return <> <Container>
            <TypographyTitle>Таблица пользователей</TypographyTitle>
            <TableWrap>
            <Table>
                <TableHead>
                    {[
                        'Checkbox',
                        '№',
                        'ФИО',
                        'Возраст(Лет)',
                        'Рост',
                        'Вес',
                        'Зарплата',
                        '',
                        ''
                    ].map((item, i) => (
                        <TableHeadCell key={i}>
                            {item === 'Checkbox' ? 
                                <Checkbox id={'commonCheckbox'}
                                        getRef={(node) => this.commonCheckbox = node }
                                        onChange={this.handleSwitchSelectAll} /> :
                                <Typography fontWeight='bold'>{item}</Typography>}
                        </TableHeadCell>
                    ))}
                </TableHead>
                <tbody>
                    {usersData ?
                    usersData.map((item, index) => {
                        return (
                        <TableRow key={index}>
                            <TableBodyCell>
                                <Checkbox id={index}
                                        getRef={(node) => this.checkboxNodes[index] = node}
                                        onChange={this.checkDisableButtonFlag} />
                            </TableBodyCell>
                            <TableBodyCell>
                                <TypographyCell>{index + 1}</TypographyCell>
                            </TableBodyCell>
                            <TableBodyCell>
                                <TypographyCell>{`${item.firstName} ${item.lastName}`}</TypographyCell>
                            </TableBodyCell>
                            <TableBodyCell>
                                <TypographyCell>{getAge(item.dateOfBirth)}</TypographyCell>
                            </TableBodyCell>
                            <TableBodyCell>
                                <TypographyCell>{getHeight(item.height)}</TypographyCell>
                            </TableBodyCell>
                            <TableBodyCell>
                                <TypographyCell>{getWeight(item.weight)}</TypographyCell>
                            </TableBodyCell>
                            <TableBodyCell>
                                <TypographyCell>{`${item.salary} $`}</TypographyCell>
                            </TableBodyCell>
                            <TableBodyCell>
                                <Icon onClick={() => {
                                    item.id = index;
                                    this.setState({
                                        displayDialog: true,
                                        person: item,
                                    })
                                }} bg={edit} width={'16px'} height={'16px'} />
                            </TableBodyCell>
                            <TableBodyCell>
                                <Icon onClick={() => this.handleDeleteRow(index)} bg={bin} width={'16px'} height={'16px'} />
                            </TableBodyCell>
                        </TableRow>
                        )
                    }) : null}
                </tbody>
            </Table>
            </TableWrap>
            <ButtonWrap>
                <Button disable={this.state.disableButtonFlag}
                        onClick={!this.state.disableButtonFlag ? this.handleDeleteSelectedRows : undefined}>
                    <Typography>Удалить выбранные</Typography>
                </Button>
            </ButtonWrap>
        </Container>
        <Dialog open={this.state.displayDialog}
                title='Редактирование зарплаты'>
            <RoundButtonWrapper>
                <RoundButton onClick={() => {
                    this.setState({
                        displayDialog: false
                    })
                }}>
                    <Icon bg={close} width={'10px'} height={'10px'} />
                </RoundButton>
            </RoundButtonWrapper>
            <Typography fontWeight='bold'>Получатель:</Typography>
            <div style={{marginBottom: '36px', marginTop: '6px'}}>
                <Typography>{`${person.firstName}  ${person.lastName}`}</Typography>  
            </div>              
            <form onSubmit={this.handleChangeSalary}>
                <div style={{marginBottom: '33px'}}>
                    <DialogInput name='textbox' defaultValue={person.salary} />
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button>
                        <Typography>Изменить зарплату</Typography>
                    </Button>
                </div>
            </form>        
        </Dialog>
        </>
    }
};

const mapStateToProps = (state) => ({
    usersData: state.usersData
});

const mapActionsToProps = (dispatch) => ({
    setTableData: bindActionCreators(setUsersDataCollection, dispatch)
});

export default connect(mapStateToProps, mapActionsToProps)(Users);