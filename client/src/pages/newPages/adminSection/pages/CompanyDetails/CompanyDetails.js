import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useAppContext } from '../../../../../context/appContext';
import InActiveList from './components/InActiveList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CompanyDetails() {
  const [value, setValue] = React.useState(0);
  const { getAllCompany, company, isLoading } = useAppContext()
  const [ inActiveCompany, setInActiveCompany] = React.useState([])
  const [allCompany, setAllCompany] = React.useState([])
  const [pendingCompany, setPendingCompany] = React.useState([])

  React.useEffect(()=>{
    getAllCompany()
  },[])

  React.useEffect(()=>{
    if(company){
      let actCompany = company.filter((itm) => itm.Status === 'active')
      let pendingCompany = company.filter((itm) => itm.Status === 'pending' )
      setPendingCompany(pendingCompany)
      setAllCompany(company)
      setInActiveCompany(actCompany)
    }
  },[company])
  const handleChange = (eve, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    {
      isLoading ? <span>loading...</span> : <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Pending Company" {...a11yProps(0)} />
          <Tab label="Active Company" {...a11yProps(1)} />
          <Tab label="All Company" {...a11yProps(2)} />
        </Tabs>
      </Box>      
      <TabPanel value={value} index={0}>
        <InActiveList companyList={pendingCompany || []} TabIndex={value}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InActiveList companyList={inActiveCompany || []} TabIndex={value}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InActiveList companyList={company || []} TabIndex={value}/>
      </TabPanel>
      </>
    }
    </Box>
  );
}
