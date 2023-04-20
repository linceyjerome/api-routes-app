//TODO : ADDING MORE CSS OR CHANGE CSS

import 'devextreme/dist/css/dx.light.css';
import {
  Column,
  ColumnChooser,
  DataGrid,
  GroupPanel,
  Pager,
  SearchPanel,
  StateStoring,
  Summary,
  TotalItem,
} from 'devextreme-react/data-grid';
import { Info } from '../interfaces';

type InfoProps = {
  info: Info[];
};

export default function KinderGardenListComponent({ info }: InfoProps) {
  const allowedPageSizes = [5, 10, 15];
  return (
    <>
      <div className="p-3">
        <h2 className="mb-6">Recherche de garderie / CPE</h2>
        <DataGrid
          id="gridContainer"
          dataSource={info}
          keyExpr="id"
          allowColumnReordering={true}
          allowColumnResizing={true}
          columnAutoWidth={true}
          showBorders={true}
        >
          <ColumnChooser enabled={true} />
          <GroupPanel
            visible={true}
            emptyPanelText="Drag and drop les colonnes pour créer un group"
          />
          <StateStoring
            enabled={true}
            type="localStorage"
            storageKey="storage"
          />
          <Pager
            showPageSizeSelector={true}
            allowedPageSizes={allowedPageSizes}
          />
          <SearchPanel visible={true} placeholder={'Recherche...'} />

          <Column dataField="compagnie_name" caption={'Nom'}></Column>
          <Column dataField="telephone"></Column>
          <Column dataField="adresse" caption={'Adresse'}></Column>
          <Column
            dataField="site"
            dataType={'Email'}
            caption={'Email'}
          ></Column>
          <Column dataField="type" caption={'Type'}></Column>
          <Column dataField="total_place_coupon" />
          <Column dataField="total_Place"></Column>

          <Summary>
            <TotalItem
              column="compagnie_name"
              summaryType="count"
              displayFormat="Total de place : {0}"
            />
          </Summary>
        </DataGrid>
      </div>
    </>
  );
}
