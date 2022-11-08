import 'devextreme/dist/css/dx.light.css';
import {
    Column,
    ColumnChooser,
    DataGrid,
    FilterPanel,
    FilterRow,
    GroupPanel,
    HeaderFilter,
    Pager,
    SearchPanel,
    StateStoring
} from 'devextreme-react/data-grid';
import { Info } from '../interfaces'
type InfoProps = {
    info: Info[]
}

export default function KinderGardenListComponent({ info }: InfoProps) {

    const allowedPageSizes = [5, 10, 15];
    return (
        <>
            <div className='p-3'>
                <DataGrid id="gridContainer" dataSource={info} keyExpr="id"
                    allowColumnReordering={true}
                    allowColumnResizing={true}
                    columnAutoWidth={true}
                    showBorders={true}>

                    <ColumnChooser enabled={true} />
                    <HeaderFilter visible={true} />
                    <FilterRow visible={true} />
                    <GroupPanel visible={true} />
                    <StateStoring enabled={true} type="localStorage" storageKey="storage" />
                    <Pager showPageSizeSelector={true} allowedPageSizes={allowedPageSizes} />
                    <SearchPanel visible={true} placeholder={"Search..."} />
                    <FilterPanel visible={true} />


                    <Column dataField="compagnie_name" caption={"Nom"}></Column>
                    <Column dataField="telephone"></Column>
                    <Column dataField="adresse" caption={"Address"}></Column>
                    <Column dataField="site" caption={"Email"}></Column>
                    <Column dataField="type" caption={"Type"}></Column>
                    <Column dataField="total_place_coupon" />
                    <Column dataField="total_Place"></Column>
                </DataGrid>
            </div>
        </>
    )
}
