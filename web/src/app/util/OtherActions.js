import React, { useRef, useState } from 'react'
import p from 'prop-types'
import IconButton from '@mui/material/IconButton'
import { MoreHoriz as OptionsIcon } from '@mui/icons-material'
import Hidden from '@mui/material/Hidden'
import { useTheme } from '@mui/material/styles'
import OtherActionsDesktop from './OtherActionsDesktop'
import OtherActionsMobile from './OtherActionsMobile'

const cancelable = (_fn) => {
  let fn = _fn
  const cFn = (...args) => fn(...args)
  cFn.cancel = () => {
    fn = () => {}
  }
  return cFn
}

export default function OtherActions({ color, icon, actions, placement }) {
  const theme = useTheme()
  const [anchorEl, setAnchorEl] = useState(null)
  const onClose = cancelable(() => setAnchorEl(null))
  const ref = useRef(null)

  return (
    <React.Fragment>
      <IconButton
        size='large'
        onClick={(e) => {
          onClose.cancel()
          setAnchorEl(e.currentTarget)
        }}
        ref={ref}
      >
        {React.cloneElement(icon, {
          'aria-label': 'Other Actions',
          'data-cy': 'other-actions',
          style: { color: color || theme.palette.secondary.main },
          'aria-expanded': Boolean(anchorEl),
        })}
      </IconButton>
      <Hidden mdDown>
        <OtherActionsDesktop
          isOpen={Boolean(anchorEl)}
          onClose={onClose}
          actions={actions}
          anchorEl={anchorEl}
          placement={placement}
        />
      </Hidden>
      <Hidden mdUp>
        <OtherActionsMobile
          isOpen={Boolean(anchorEl)}
          onClose={onClose}
          actions={actions}
        />
      </Hidden>
    </React.Fragment>
  )
}

OtherActions.propTypes = {
  actions: p.arrayOf(
    p.shape({
      label: p.string.isRequired,
      onClick: p.func.isRequired,
    }),
  ).isRequired,
  color: p.string,
  icon: p.element,
  placement: p.oneOf(['left', 'right']),
}

OtherActions.defaultProps = {
  icon: <OptionsIcon />,
  placement: 'left',
}
