// import './style.scss';
// import React from 'react';

// const DropDownLists = (props) => (
//   <div className="DropDownLists">DropDownLists</div>
// );

// export default DropDownLists;
import './style.scss';
import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class DropDownLists extends React.Component {
  static defaultProps = {
    selectIndex: 0,
    selectItemsData: [
      { title:'分類' , value: ''},
      { title: '分類1', value: '1' },
      { title: '分類2', value: '2' }
    ],
    onChange(value) {
      console.log('onChange', value);
    }
  };
  state = {
    currentSelect: this.props.selectIndex,
    dropdownOpen: false
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.selectIndex !== nextProps.selectIndex){
      this.setState({
        currentSelect: nextProps.selectIndex
      })
    }
  }

  toggle = () => {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  }

  render() {
    let { currentSelect} = this.state; 
    let { selectItemsData} =this.props;
    return (
      <div className="DropDownLists">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            <span className="DropDownListsTitle"> {selectItemsData[currentSelect].title}</span>
          </DropdownToggle>
          <DropdownMenu>
            {selectItemsData.map((selectItem,index) => (
              <DropdownItem 
                key={index}
                onClick={async () => {
                  let { selectItemsData }= this.props;
                  // 將 dropdown 的開啟狀態以及值丟給 onChange 父層 callback做更新父層state 使用
                  await this.setState({ currentSelect: index})
                  this.props.onChange(selectItemsData[index].value);
                }}
              >{selectItem.title}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}