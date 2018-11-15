// Import Component
import React, { Component } from 'react';

// Create a SearchApp Component
class SearchApp extends Component {
    // In the constructor, set the initial state of search to empty string
    // Also *bind `this`* to the handleChange function
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            search: ''
        };

    }

    // In this event, get the target value, and reset the state of `search`
    handleChange(event) {
        // Get event value
        let searchValue = event.target.value;
        // Set the state to trigger a re-rendering
        this.setState({
            search: searchValue
        })
    }

    // Function to render data
    render() {
        // Filter the table data
        let employees = this.props.data,
            searchString = this.state == null ? '' : this.state.search.trim().toLowerCase();

        // If the search string isn't an empty string, filter the results using `.match`
        if (searchString.length > 0) {
            // We are searching. Filter the results.
            employees = employees.filter((e) => e.name.toLowerCase().match(searchString));
        }

        // Return a `div` containing a  `UserInput` component and a `Table` component
        return (
            <div>
                <UserInput update={ this.handleChange} />
                <Table data={employees}/>                                  
            </div>
        )
    }
}

// UserInput component
class UserInput extends Component {
    constructor(props) {
        super(props)
    }

    // Return an input element that, on change, does the event passed to update via props
    render() {
        return (
            <div>
                <input className="form-control mb-2" placeholder="Search employees..."
                onChange={ (e) => this.props.update(e) }/>
            </div>)
    }
}

// Simple TableRow component for showing a <tr>
class TableRow extends Component {
    render() {
        return (
            <tr>
              <td>
                { this.props.name }
              </td>
              <td>
                { this.props.title }
              </td>
              <td>
                { this.props.salary }
              </td>
            </tr>)
    }
}
;

// Class for a table
class Table extends Component {
    constructor(props) {
        super(props);
    }
    // Should return a TableRow component for each element in this.props.data
    render() {
        return (
            <div>
              <table className="table">
                <tbody>
                  <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Salary</th>
                  </tr>
                  {
                      this.props.data.map(function(d, i) {
                          return <TableRow key={'person-' + i } name={d.name} salary={d.salary} title={d.title} />
                      })
                  }
                </tbody>
              </table>
            </div>
        )
    }
}

// Export the SearchApp
export default SearchApp;
