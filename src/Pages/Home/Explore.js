import React, { useEffect, useState } from 'react';
import useDoctors from '../../Hooks/useDoctors';
import Pagination from '@mui/material/Pagination';
import { Grid } from '@mui/material';
import Doctor from './Doctor/Doctor';

const Explore = () => {
  const [doctors, setdoctors] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  const size = 6;

  useEffect(() => {
    fetch(`https://doctocare.herokuapp.com/doctors?page=${page}&&size=${size}`)
      .then(res => res.json())
      .then(data => {
        setdoctors(data.doctors)
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      }
      )


  }, [page])
  return (
    <div className="bg-white ">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 drop-shadow">
        <h2 className="sr-only">Products</h2>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }} sx={{ my: '20px', textAlign: 'center', mx: '0 auto' }}>


          {
            doctors.map(doctor => <Grid item xs={6} sm={4} md={4} key={doctor._id} > <Doctor doctor={doctor}></Doctor> </Grid>)
          }
        </Grid>
        <div className="pagination">
          {
            [...Array(pageCount).keys()]
              .map(number =>
                <button
                  className={number === page ? 'selected' : ''}
                  key={number}
                  onClick={() => setPage(number)}
                  className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
                >
                  {number + 1}
                </button>


              )
          }
        </div>
      </div>

    </div>
  );
};

export default Explore;