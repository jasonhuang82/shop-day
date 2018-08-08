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
    defaultSelect: 0,
    selectItemsData: [
      { title:'分類' , value: ''},
      { title: '分類1', value: '1' },
      { title: '分類2', value: '2' }
    ],
    onToggle(openState){
      console.log('onToggle');
    }
  };
  state = {
    currentSelect: this.props.defaultSelect,
    dropdownOpen: false
  };
  toggle = () => {
    let { currentSelect } = this.state;
    let { selectItemsData } = this.props;
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }), () => this.props.onToggle(this.state.dropdownOpen, selectItemsData[currentSelect].value));
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
                onClick={e => {
                  this.setState({ currentSelect: index})
                }}
              >{selectItem.title}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}