import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router';
// mui imports
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  Chip,
  Box,
  useTheme
} from '@mui/material';

const NavItem = ({ item, level, pathDirect, onClick,chip }) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} size="1.3rem" />;

  const ListItemStyled = styled(ListItem)(() => ({
    whiteSpace: 'nowrap',
    marginBottom: '2px',
    padding: '8px 10px',
    borderRadius: '8px',
    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
    color:
      theme.palette.text.dark,
    paddingLeft: '10px',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.primary.main,
    },
    '&.active': {
      color: 'white',
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: 'white',
      },
    },
  }));

  return (
    <List component="li" disablePadding key={item.id}>
      <ListItemStyled
        button
        component={item.external ? 'a' : NavLink}
        to={item.href}
        href={item.external ? item.href : ''}
        disabled={item.disabled}
        selected={pathDirect === item.href}
        target={item.external ? '_blank' : ''}
        onClick={onClick}
      >
        <ListItemIcon
          sx={{
            minWidth: '36px',
            p: '3px 0',
            color: 'inherit',
          }}
        >
          {itemIcon}
        </ListItemIcon>
        <ListItemText sx={{marginY:"0px"}} >
        <Box sx={{maxWidth:"90px", overflowX:"hidden" , textOverflow:"ellipsis"}} >{item.title}</Box>
        </ListItemText>
        {!chip ? null : (
          <Chip
            color={"secondary"}
            variant={'filled'}
            size="small"
            label={"Pro"}
            sx={{
              height: 'fit-content', 
             
              borderRadius:"5px",
              '& .MuiChip-label': {
                fontSize:"11px",
                paddingY:"4px",
                paddingX:"10px",
              },
            }}
          />
        )}
      </ListItemStyled>
    </List>
  );
};

NavItem.propTypes = {
  item: PropTypes.object,
  level: PropTypes.number,
  pathDirect: PropTypes.any,
};

export default NavItem;
