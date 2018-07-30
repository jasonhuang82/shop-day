import React, { Component } from 'react';
import { connect } from 'react-redux';
import Person from '~/components/Person';
import AddPerson from '~/components/AddPerson';

// import { PERSON_ADD, PERSON_DEL } from "~/actions/actionType";
import { addPersonHandle, delPersonHandle} from "~/actions";

class Persons extends Component {


    personDeletedHandler = (personId) => {
        this.setState( ( prevState ) => {
            return { persons: prevState.persons.filter(person => person.id !== personId)}
        } );
    }

    componentDidMount() {
        console.log('match',this.props.match);
        
    }
    render () {
        return (
            <div>
                <h3></h3>
                <AddPerson personAdded={this.props.addPerson} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.delPerson(person.id)}/>
                ))}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    console.log('state',state);
    
    return {
        persons: state.persons
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPerson: () => dispatch(addPersonHandle()),
        delPerson: (personID) => dispatch(delPersonHandle(personID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons)


