import './ExpenseItem.css';

function ExpenceItem () {
  return (
    <div className='expense-item'>
      <div>11.08.2022</div>
        <div className='expense-item__description'>
          <h2>Bread</h2>
          <div className='expense-item__price'>$1.49</div>
        </div>
    </div>
  )
} 

export default ExpenceItem;
