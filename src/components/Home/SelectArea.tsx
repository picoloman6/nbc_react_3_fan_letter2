import { MemberTypes, MemberStateTypes } from '../../types/letters';
import { StSelectWrapper, StSelectBtnWrapper } from './SelectArea.style';

interface SelectBtnPropsTypes extends MemberStateTypes {
  selected: boolean;
}

const SelectBtn = ({ member, selected, changeMember }: SelectBtnPropsTypes) => {
  return (
    <StSelectBtnWrapper
      selected={selected}
      onClick={() => changeMember(member)}>
      <span>{member}</span>
    </StSelectBtnWrapper>
  );
};

const SelectArea = ({ member, changeMember }: MemberStateTypes) => {
  const members: MemberTypes[] = ['카리나', '윈터', '닝닝', '지젤'];

  return (
    <StSelectWrapper>
      {members.map((v) => (
        <SelectBtn
          member={v}
          key={v}
          selected={v === member}
          changeMember={changeMember}
        />
      ))}
    </StSelectWrapper>
  );
};

export default SelectArea;
