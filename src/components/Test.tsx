import react from 'react';

function buttonTest(){
    return (
        <div>
            <button className="btn btn-primary" type="submit">Button</button>

            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger">Left</button>
  <button type="button" className="btn btn-warning">Middle</button>
  <button type="button" className="btn btn-success">Right</button>
</div>

        </div>
    )
}

export default buttonTest;