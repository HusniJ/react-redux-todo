import React from "react";
import cx from "classnames";
import { VISIBILITY_FILTERS } from "../constants";
import { connect } from "react-redux";
import { setFilter } from "../redux/action";

class VisibilityFilters extends React.Component {
  render() {
    return (
      <div className="visibility-filters">
        {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
          const currentFilter = VISIBILITY_FILTERS[filterKey];
          return (
            <span
              key={`visibility-filter-${currentFilter}`}
              className={cx(
                "filter",
                currentFilter === this.props.activeFilter && "filter--active"
              )}
              onClick={() => {
                this.props.setFilter(currentFilter);
              }}
            >
              {currentFilter}
            </span>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { activeFilter: state.visibilityFilter };
};

export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
