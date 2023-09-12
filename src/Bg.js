import './Bg.css';
import { useState } from 'react';

function Bg() {
  const [displayNoBgTab, setDisplayNoBgTab] = useState(false);

  const changeTab = () => {
    if(displayNoBgTab) {
        setDisplayNoBgTab(false);
    } else {
        setDisplayNoBgTab(true)
    }
  }
  return (
    <div className="Bg">
        <div className="header">
            <span className='header_text'>Please upload a photo for background removal</span>
            <span className='header_supported_formats'>Supported formats: png, jpeg</span>
            <span className='header_btn'>Upload photo</span>
        </div>
    
        <div className='main_div'>
            <div className='left_div'>
                <div className='left_div-tabs'>
                    <span className='left_div-tabs-original' onClick={changeTab}>Original</span>
                    <span className='left_div-tabs-bg_remove' onClick={changeTab}>Remove BG</span>
                </div>
                {!displayNoBgTab ?
                    <div className='left_div-original-tab'>original</div>
                :
                    <div className='left_div-no_bg_tab'>bg removed</div>
                }
            </div>
            <div className='right_div'>
                <div className='right_div_middle_div'>
                    <div className='middle_div_top_div'>
                        <div className='middle_div_top_div-text_1'>Free photo</div>
                        <div className='middle_div_top_div-text_2'>An example of a photo 612x408</div>
                        <button className='middle_div_top_div-button'>Download</button>
                        <div className='middle_div_top_div-checkbox'>Good quality up to 0.25 megapixels</div>
                    </div>
                    <div className='middle_div_bottom_div'>
                        <div className='middle_div_bottom_div-text_1'>Pro </div>
                        <div className='middle_div_bottom_div-text_2'>Entire photo 1280x1920</div>
                        <button className='middle_div_bottom_div-button'>Download HD</button>
                        <div className='middle_div_bottom_div-checkbox'>Best quality up to 25 megapixels</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Bg;
