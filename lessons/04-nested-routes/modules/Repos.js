import React from 'react'

export default React.createClass({
  render() {
    return (
        <div>
            <div>Repos</div>
            {this.props.children}
        </div>
    )
  }
})
