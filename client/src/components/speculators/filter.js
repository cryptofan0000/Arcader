import React, {Fragment, useEffect, useState} from 'react'

import FilterTap from '../items/filtertap'
import SelectOption from '../inputs/filterselect'
import SortOption from '../inputs/sortoption'

import IMG_FILTER_CS from '../../assets/images/icons/filter-cs-ico.svg'
import IMG_FILTER_CO from '../../assets/images/icons/filter-co-ico.svg'
import IMG_FILTER_FT from '../../assets/images/icons/filter-ft-ico.svg'

const SpecFilter = () => {
    const [gameOption, setGameoption] = useState([])
    const [placeOption, setPlaceoption] = useState([])
    const [sortOption, setSortoption] = useState([])

    useEffect(() => {
        const _gameOptions = ['All types', '1x1', '2x2', '3x3', 'TxT']
        setGameoption(_gameOptions)
        const _placeOptions = ['de_dust2', '1000$', '2000$', '5000$']
        setPlaceoption(_placeOptions)
        const _sortOptions = ['Time', 'Entrance Fee', 'Prize']
        setSortoption(_sortOptions)
    }, [])

    return (
        <Fragment>
            <div className='spec-filter-section'>
                <div className='filter-tap-section'>
                    <FilterTap filtername={'All games'} />
                    <FilterTap filtername={'CS:GO'} filtericon={IMG_FILTER_CS} />
                    <FilterTap filtername={'Call of Duty'} filtericon={IMG_FILTER_CO} />
                    <FilterTap filtername={'Fortnite'} filtericon={IMG_FILTER_FT} />
                </div>
                <div className='filter-hr-line'></div>
                <div className='filter-select-section'>
                    <div className='sub-select'>
                        <SelectOption options={gameOption} />
                        <SelectOption options={placeOption} />
                    </div>
                    <div className='sub-select'>
                        <span>Sort by</span><SortOption options={sortOption}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default SpecFilter