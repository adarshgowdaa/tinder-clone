import React from 'react'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import IconButton from '@mui/material/IconButton';
import '../Style/swipeButtons.css'
function SwipeButtons() {
  return (
    <div className='swipeButtons'>
      <IconButton className='swipeButton-repeat'>
        <ReplayIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButton-left'>
        <CloseIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButton-star'>
        <StarRateIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButton-right'>
        <FavoriteIcon fontSize='large'/>
      </IconButton>
      <IconButton className='swipeButton-lightning'>
        <FlashOnIcon fontSize='large'/>
      </IconButton>
    </div>
  )
}

export default SwipeButtons
