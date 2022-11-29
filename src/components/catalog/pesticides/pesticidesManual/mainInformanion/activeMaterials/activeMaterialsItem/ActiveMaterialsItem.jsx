import styles from './ActiveMaterialsItem.module.scss';

function ActiveMaterialsItem({ name, amount, amountUnit, category }) {
  const getName = category.find(item => item.id === name);
  return (
    <li className={styles.li}>
      <p className={styles.name}>{getName?.name}</p>
      <p>
        {amount} <span>{amountUnit}</span>
      </p>
    </li>
  );
}

export default ActiveMaterialsItem;
