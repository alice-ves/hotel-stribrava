export const Form = () => {
  return (
    <form>
      <div className="form-fields">
        <label htmlFor="field1" className="field-label">
          Od:
        </label>
        <input id="field1" className="field-input" type="date" />

        <label htmlFor="field2" className="field-label">
          Do:
        </label>
        <input id="field2" className="field-input" type="date" />

        <label htmlFor="field3" className="field-label">
          Pocet osob:
        </label>
        <input id="field3" className="field-input" type="number" />

        <label htmlFor="select" className="field-label">
          Stravovani:
        </label>
        <select id="select" className="field-input">
          <option>Zadne</option>
          <option>Polopenze</option>
          <option>Plna penze</option>
        </select>

        <label htmlFor="check1" className="field-label">
          Domaci mazlicek:
        </label>
        <input id="check1" className="field-input" type="checkbox" />
        <label htmlFor="check1" className="field-label">
          Pristylka pro dite:
        </label>
        <input id="check1" className="field-input" type="checkbox" />
        <label htmlFor="check1" className="field-label">
          Bezbarierovy pristup:
        </label>
        <input id="check1" className="field-input" type="checkbox" />
        <label htmlFor="field4" className="field-label">
          Email:
        </label>
        <input id="field4" className="field-input" type="email" />
        <label htmlFor="field4" className="field-label">
          Telefon:
        </label>
        <input id="field5" className="field-input" type="tel" />
      </div>

      <button className="wide">Submit</button>
    </form>
  );
};
