import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function Media() {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState([]);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search.slice(6);

  const getData = useCallback((pages) => {
    setLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${pages}&_limit=15}`
    )
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const searchPage = search ? Number(search) : 1;
    setPage(searchPage);

    getData(searchPage);
  }, [search, getData]);

  const handlePagination = (event, newPage) => {
    //setPage(newPage);

    navigate(`?page=${newPage}`);
  };

  return (
    <>
      <Grid container spacing={2}>
        {(loading ? Array.from(new Array(15)) : post).map((item, index) => (
          <Grid item xs={4} sm={3} key={item?.id ? item?.id : index}>
            <Box sx={{ width: '100%', marginRight: 0.5, my: 5 }}>
              {item ? (
                <img
                  style={{ width: '100%', height: 118 }}
                  alt={item.title}
                  src={item.url}
                />
              ) : (
                <Skeleton variant="rectangular" width="100%" height={118} />
              )}

              {item ? (
                <Box sx={{ pr: 2 }}>
                  <Typography gutterBottom variant="body2">
                    {item.title}
                  </Typography>
                  <Typography
                    display="block"
                    variant="caption"
                    color="text.secondary"
                  >
                    Album {item.id}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    396 k views • a week ago
                  </Typography>
                </Box>
              ) : (
                <Box sx={{ pt: 0.5 }}>
                  <Skeleton />
                  <Skeleton width="60%" />
                </Box>
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ marginBottom: '20px' }}
      >
        <Pagination
          onChange={handlePagination}
          color="primary"
          page={page}
          count={Math.ceil(100 / 15)}
          showFirstButton
          showLastButton
        />
      </Stack>
    </>
  );
}

export default function SkeletonLoad() {
  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Media />
    </Box>
  );
}
