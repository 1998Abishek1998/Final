import React from 'react'
import Input from '@mui/material/Input';
import Divider from '@mui/material/Divider';
import { TiTick } from 'react-icons/ti';
import { BsEye } from 'react-icons/bs';
import { BiPencil } from 'react-icons/bi';
import { GiCrossMark } from 'react-icons/gi';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useAppContext } from '../../../../../../context/appContext';

const rowStyle={
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}

const footerStyle={
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
}

const CompanyModal = (props) => {
    const { approveCompany, rejectCompany} = useAppContext()
    const { data, setOpen } = props

    const renderAction = (row)=>{
        return <div style={footerStyle}>
            {
              row.Status === 'pending' && !row.IsActive && (<Tooltip title="Approve Account">
                <IconButton
                  size='small'
                  onClick={(e)=>{
                    approveCompany(row._id)
                  }}
                >
                  <TiTick/>
                </IconButton>
              </Tooltip>
              ) 
            }
            {
              row.IsActive && (
                <Tooltip title="Details">
                <IconButton 
                  size='small'
                  disabled={!row.IsActive}
                  onClick={(e)=>{
                    console.log(row, 'details')
                  }}
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
                  onClick={(e)=>{
                    console.log(row, 'edit')
                  }}
                >
                  <BiPencil/>
                </IconButton>
              </Tooltip>
              )
            }
            {
                row.Status === 'rejected' ? '' : 
                    <Tooltip title="Reject">
                        <IconButton 
                          size='small'
                          onClick={(e)=>{
                            rejectCompany(row._id)
                          }}
                        >
                          <GiCrossMark/>
                        </IconButton>
                    </Tooltip>
            }
            <Button variant="contained" color="error" onClick={() => setOpen(false)}>
                Close
            </Button>
        </div>
    }
    return (
        <div key={data._id}>
            <h4>Are you sure you want to Approve this Company ? </h4>
            <br />
            <Divider light/>
            <br />
            <div style={rowStyle}>
                <h4>Number :</h4>
                <Input
                    readOnly
                    value={data.CompanyNumber}    
                />
            </div>
            <div style={rowStyle}>
                <h4>Company Name :</h4>
            <Input
                readOnly
                value={data.CompanyName}    
            />
            </div>
            <div style={rowStyle}>
                <h4>Contact :</h4>  
            <Input
                readOnly
                value={data.Contact}    
            />
            </div>
            <div style={rowStyle}>
                <h4>Email :</h4>
            <Input
                readOnly
                value={data.Email}    
            />
            </div>
            <div style={rowStyle}>
                <h4>Location :</h4>
            <Input
                readOnly
                value={data.Location}    
            />
            </div>
            {
              data.Status === 'pending' && !data.IsActive && (
                <TextField
                  error
                  readOnly
                  label="Error"
                  defaultValue="Hello World"
                  variant="standard"
                />
              )
            }
            <br />
                <Divider light/>
            <br />
            {renderAction(data)}
        </div>
    )
}

export default React.memo(CompanyModal)