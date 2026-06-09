import React from 'react';

function CalcItem({ name, price, count, itemKey, onAdjust, onChange }) {
  const handleChange = (e) => {
    // Strip out all characters that are not digits (0-9)
    const onlyDigits = e.target.value.replace(/\D/g, '');
    onChange(itemKey, onlyDigits);
  };

  return (
    <div className="Calc-item">
      <div className="Calc-label">
        <span className="Calc-name">{name}</span>
        <span className="Calc-price">{price} kr/st</span>
      </div>
      <div className="Calc-controls">
        <button className="Calc-btn" onClick={() => onAdjust(itemKey, -1)}>-</button>
        <input 
          type="text" 
          inputMode="numeric"
          pattern="[0-9]*"
          className="Calc-input" 
          value={count || ''} 
          onChange={handleChange} 
          placeholder="0"
        />
        <button className="Calc-btn" onClick={() => onAdjust(itemKey, 1)}>+</button>
      </div>
    </div>
  );
}

export default CalcItem;
