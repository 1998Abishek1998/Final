import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { visuallyHidden } from '@mui/utils';
import CompanySearch from './CompanySearch';
import { BsEye } from 'react-icons/bs';
<<<<<<< HEAD:client/src/pages/newPages/adminSection/components/InActiveList.js
import { BiPencil } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useAppContext } from '../../../../context/appContext';
=======
import { Modal } from '@mui/material';
import AcceptModal from './CompanyModal';
>>>>>>> origin/mongoDb-setup:client/src/pages/newPages/adminSection/pages/CompanyDetails/components/InActiveList.js

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'CompanyName',
    numeric: false,
    disablePadding: true,
    label: 'Company Name',
  },
  {
    id: 'CompanyNumber',
    numeric: false,
    disablePadding: false,
    label: 'Company Number',
  },
  {
    id: 'Contact',
    numeric: true,
    disablePadding: false,
    label: 'Contact',
  },
  {
    id: 'Email',
    numeric: false,
    disablePadding: false,
    label: 'Email',
  },
  {
    id: 'Location',
    numeric: false,
    disablePadding: false,
    label: 'Location  ',
  },
  {
    id: 'Satus',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'Actions',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const EnhancedTableToolbar = (props) => {
<<<<<<< HEAD:client/src/pages/newPages/adminSection/components/InActiveList.js
  const dispatch = useDispatch()
  const { approveCompany } = useAppContext()
  const { numSelected, value, companyList, selected } = props;
=======
  const { value, companyList } = props;
>>>>>>> origin/mongoDb-setup:client/src/pages/newPages/adminSection/pages/CompanyDetails/components/InActiveList.js

  return (
    <Toolbar
    >
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {
            value === 0 ? 'Pending List' : value === 1 ? 'Active List' : 'All List'
          }
        </Typography>
        <CompanySearch companyList={companyList}/>
      
<<<<<<< HEAD:client/src/pages/newPages/adminSection/components/InActiveList.js
      {numSelected === 1 ? (
        <div style={{ display: 'flex', flexDirection:'row'}}>
        <Tooltip title="View">
          <IconButton 
            onClick={()=>{}}
          >
            <BsEye/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Edit">
          <IconButton 
          >
            <BiPencil/>
          </IconButton>
         </Tooltip>
        {/*  <Tooltip title="Delete">
          <IconButton 
            onClick={()=>{}}
          >
            <DeleteIcon/>
          </IconButton>
        </Tooltip> */}
        </div>
      ) : (
        ''
      )}

      {
        value === 1 ? <>
        {numSelected > 0  ? (
        ''
      ) : (
        <CompanySearch companyList={companyList}/>
      )}
        </>: <>
        {numSelected > 0  ? (
        <Tooltip title="Accept ALl">
          <IconButton 
            onClick={(e)=>{
              e.preventDefault()
              console.log(selected)
              dispatch(approveCompany(selected))
            }}
          >
            <TiTick/>
          </IconButton>
        </Tooltip>
      ) : (
        <CompanySearch companyList={companyList}/>
      )}
        </>
      }
=======
>>>>>>> origin/mongoDb-setup:client/src/pages/newPages/adminSection/pages/CompanyDetails/components/InActiveList.js
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  companyList: PropTypes.array.isRequired
};

export default function EnhancedTable(props) {
  const {companyList, TabIndex} = props
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
<<<<<<< HEAD:client/src/pages/newPages/adminSection/components/InActiveList.js
=======
  const [open, setOpen] = React.useState(false);
  const [ modalRowData, setModalRowData] = React.useState({})

>>>>>>> origin/mongoDb-setup:client/src/pages/newPages/adminSection/pages/CompanyDetails/components/InActiveList.js
  let rowsPerPage = 6

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

<<<<<<< HEAD:client/src/pages/newPages/adminSection/components/InActiveList.js
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = companyList.map((n) => n._id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

=======
>>>>>>> origin/mongoDb-setup:client/src/pages/newPages/adminSection/pages/CompanyDetails/components/InActiveList.js
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - companyList.length) : 0;

  return (
    <Box>
      <Paper >
<<<<<<< HEAD:client/src/pages/newPages/adminSection/components/InActiveList.js
        <EnhancedTableToolbar numSelected={selected.length} value={TabIndex} companyList={companyList} selected={selected}/>
=======
        <EnhancedTableToolbar value={TabIndex} companyList={companyList}/>
>>>>>>> origin/mongoDb-setup:client/src/pages/newPages/adminSection/pages/CompanyDetails/components/InActiveList.js
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(companyList, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
<<<<<<< HEAD:client/src/pages/newPages/adminSection/components/InActiveList.js
                  const isItemSelected = isSelected(row._id);
=======
>>>>>>> origin/mongoDb-setup:client/src/pages/newPages/adminSection/pages/CompanyDetails/components/InActiveList.js
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
<<<<<<< HEAD:client/src/pages/newPages/adminSection/components/InActiveList.js
                      onClick={(event) => handleClick(event, row._id)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={companyList._id}
                      selected={isItemSelected}
=======
                      tabIndex={-1}
                      key={companyList._id}
>>>>>>> origin/mongoDb-setup:client/src/pages/newPages/adminSection/pages/CompanyDetails/components/InActiveList.js
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="left"
                      >
                        {row.CompanyName}
                      </TableCell>
                      <TableCell align="left">{row.CompanyNumber}</TableCell>
                      <TableCell align="left">{row.Contact}</TableCell>
                      <TableCell align="left">{row.Email}</TableCell>
                      <TableCell align="left">{row.Location}</TableCell>
                      <TableCell align="left">{row.Status}</TableCell>
                      <TableCell align="left">
                        <Tooltip title="View">
                          <IconButton 
                            size='small'
                            onClick={(e)=> {
                              setOpen(true)
                              setModalRowData(row)
                            }}
                          >
                            <BsEye/>
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={companyList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
      
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AcceptModal data={modalRowData} setOpen={setOpen}/>
        </Box>
      </Modal>
    </div>
    </Box>
  );
}