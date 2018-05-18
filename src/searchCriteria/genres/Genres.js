import React, { Component } from "react";
import Select from "react-select";
import { bindActionCreators } from "redux";
import "react-select/dist/react-select.css";
import { connect } from "react-redux";
import * as genresActions from "./genres-actions";
import _ from "lodash";

class Genres extends Component {
  selectedOption = "";
  handleChange = genres => {
    this.selectedOption = genres;

    genres = _.map(genres, function(el) {
      return el.value;
    });
    this.props.updateGenreAction(genres);
  };

  render() {
    const genresDropDown = [
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
      <div className="col my-auto">
        <Select
          className="w-25 align-middle"
          closeOnSelect={false}
          multi
          name="form-field-name"
          value={this.selectedOption}
          onChange={this.handleChange}
          placeholder="Select a Genre"
          options={genresDropDown}
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    genres: state.genres
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(genresActions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
