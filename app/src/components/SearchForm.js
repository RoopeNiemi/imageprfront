import React from 'react'

const SearchForm = ({ handleSubmit }) => {

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col">
                        <input className="form-control" name="minLon" maxLength="2" placeholder="Min longitude" />
                    </div>
                    <div className="col">
                        <input className="form-control" name="maxLon" maxLength="2" placeholder="Max longitude" />
                    </div>
                    <div className="col">
                        <input className="form-control" name="minLat" maxLength="2" placeholder="Min latitude" />
                    </div>
                    <div className="col">

                        <input className="form-control" name="maxLat" maxLength="2" placeholder="Max latitude" />
                    </div>
                    <button type="submit" className="btn btn-primary" value="Submit">Search</button>          </div>
            </form>
        </div>
    )
}

export default SearchForm