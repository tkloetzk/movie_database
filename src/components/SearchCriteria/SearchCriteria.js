import React, { Component } from "react";
import "./SearchCriteria.css";
import Select from "react-select";
import "react-select/dist/react-select.css";
import { connect } from "react-redux";
import { genresActions } from "../../actions/searchCriteriaActions/genresActions";

class SearchCriteria extends Component {
  state = {
    selectedOption: "",
    value: []
  };
  handleChange = selectedOption => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption, value } = this.state;
    const genres = [
      { value: "Action, Adventure", label: "Action/Adventure" },
      { value: "Comedy", label: "Comedy" },
      { value: "Crime", label: "Crime" },
      { value: "Drama", label: "Drama" },
      { value: "Family", label: "Family" },
      { value: "Fantasy", label: "Fantasy" },
      { value: "Film Noir", label: "Film Noir" },
      { value: "Horror", label: "Horror" },
      { value: "Musical", label: "Musical" },
      { value: "Mystery", label: "Mystery" },
      { value: "Romance", label: "Romance" },
      { value: "Sci-Fi", label: "Sci-Fi" },
      { value: "Thriller", label: "Thriller" },
      { value: "War", label: "War" },
      { value: "Western", label: "Western" }
    ];
    return (
      <div className="row rounded" id="searchCriteria">
        <div className="col my-auto">
          {this.props.genres}
          <Select
            className="w-25 align-middle"
            closeOnSelect={false}
            multi
            name="form-field-name"
            value={selectedOption}
            onChange={this.handleChange}
            placeholder="Select a Genre"
            options={genres}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ genres }) => ({
  genres
});

export default connect(mapStateToProps)(SearchCriteria);
