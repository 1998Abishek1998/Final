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
import { TiTick } from 'react-icons/ti';
import CompanySearch from './CompanySearch';
import { BsEye } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import { GiCrossMark } from 'react-icons/gi';

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

const handleAccept = (e, row)=>{
  console.log(e,row,'accept')
}

const handleView = (e, row)=>{
  console.log(e,row,'view')
}

const handleDelete = (e, row)=>{
  console.log(e,row,'delete')
}

const handleEdit = (e, row)=>{
  console.log(e,row,'edit')
}

const renderAction = (row)=>{
  return <div>
      {
        row.Status === 'pending' && (<Tooltip title="Approve Account">
          <IconButton 
            size='small'
            onClick={(e)=>{ handleAccept(e, row)}}
          >
            <TiTick/>
          </IconButton>
        </Tooltip>
        )
      }
      {
        row.IsActive && (
          <Tooltip title="View">
          <IconButton 
            size='small'
            disabled={!row.IsActive}
            onClick={(e)=>{ handleView(e, row)}}
          >
            <BsEye/>
          </IconButton>
        </Tooltip>
        )
      }
      {
        row.IsActive && (
          <Tooltip title="Edit">
          <IconButton 
            size='small'
            disabled={!row.IsActive}
            onClick={(e)=>{ handleEdit(e, row)}}
          >
            <BiPencil/>
          </IconButton>
        </Tooltip>
        )
      }
          <Tooltip title="Reject">
          <IconButton 
            size='small'
            onClick={(e)=>{ handleDelete(e, row)}}
          >
            <GiCrossMark/>
          </IconButton>
        </Tooltip>
  </div>
}

const EnhancedTableToolbar = (props) => {
  const { value, companyList } = props;

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

  let rowsPerPage = 6

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };



  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - companyList.length) : 0;

  return (
    <Box>
      <Paper >
        <EnhancedTableToolbar value={TabIndex} companyList={companyList}/>
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
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      tabIndex={-1}
                      key={companyList._id}
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
                      <TableCell align="left">{renderAction(row)}</TableCell>
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
    </Box>
  );
}