import React from 'react'
import { Link } from 'react-router'

export default class SuggestEdit extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const adminButton = (
      <div className='suggest-edit'>
        <Link to={'/admin/form?buildingId=' + this.props.building._id}>Edit this building</Link>
        <div><b>Want to change something?</b> Click the button above to edit this record.</div>
      </div>
    )

    const contributeButton = (
      <div className='suggest-edit'>
        <a href='mailto:nhba@yale.edu?Subject=NHBA%20Editorial'
          target='_top'>Suggest an Edit</a>
        <div><b>Have something to add?</b> Contribute a fun fact or image to this building.</div>
      </div>
    )

    const button = this.props.admin ? adminButton : contributeButton;

    return (
      <span>{button}</span>
    )
  }
}
