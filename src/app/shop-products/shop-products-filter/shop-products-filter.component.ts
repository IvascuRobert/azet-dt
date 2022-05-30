import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { PriceRange } from 'src/app/shared/enum/price-range';
import { State } from 'src/app/shared/enum/state';
import { FilterFlatNode } from 'src/app/shared/interface/filter-flat-node';
import { FilterNode } from 'src/app/shared/interface/filter-node';

@Component({
  selector: 'app-shop-products-filter',
  templateUrl: './shop-products-filter.component.html',
  styleUrls: ['./shop-products-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShopProductsFilterComponent implements OnInit {

  @Output() clickFilterItem = new EventEmitter();

  private transformer = (node: FilterNode, level: number) => {
    return <FilterFlatNode>{
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
      id: node.id,
    };
  }

  treeControl = new FlatTreeControl<FilterFlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this.transformer, (node: any) => node.level, (node: any) => node.expandable, (node: any) => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  /** The selection for checklist */
  checklistSelection = new SelectionModel<FilterFlatNode>(true /* multiple */);

  getLevel = (node: FilterFlatNode) => node.level;

  constructor() {
    this.dataSource.data = [
      {
        name: 'Disponibilitate',
        id: '',
        children: [
          { name: 'În stoc', id: State.STOCK },
          { name: 'La comanda', id: State.COMMAND }
        ]
      },
      {
        name: 'Producător',
        id: '',
        children: [
          { name: 'Continental', id: 'Continental' },
          { name: 'Pirelli', id: 'Pirelli' },
          { name: 'Michelin', id: 'Michelin' },
          { name: 'Bridgestone', id: 'Bridgestone' },
          { name: 'Hankook', id: 'Hankook' },
          { name: 'Goodyear', id: 'Goodyear' }
        ]
      },
      {
        name: 'Preț',
        id: '',
        children: [
          { name: 'Sub 100 lei', id: PriceRange.UNDER100 },
          { name: 'Între 100 și 250 lei', id: PriceRange.BETWEEN100_250 },
          { name: 'Între 250 și 500 lei', id: PriceRange.BETWEEN250_500 },
          { name: 'Între 500 și 1000 lei', id: PriceRange.BETWEEN500_1000 },
          { name: 'Peste 1000', id: PriceRange.OVER1000 }
        ]
      },
      {
        name: 'Lățime',
        id: '',
        children: [
          { name: '225', id: '225' },
          { name: '215', id: '1' },
          { name: '235', id: '1' },
          { name: '205', id: '1' },
          { name: '195', id: '1' },
          { name: '255', id: '1' }
        ]
      },
      {
        name: 'Înălțime',
        id: '',
        children: [
          { name: '225', id: '1' },
          { name: '215', id: '1' },
          { name: '235', id: '1' },
          { name: '205', id: '1' },
          { name: '195', id: '1' },
          { name: '255', id: '1' }
        ]
      },
      {
        name: 'Diametru',
        id: '',
        children: [
          { name: '16', id: '1' },
          { name: '17', id: '1' },
          { name: '18', id: '1' },
          { name: '15', id: '1' },
          { name: '19', id: '1' },
          { name: '20', id: '1' }
        ]
      }
    ];
  }

  ngOnInit(): void {
    this.treeControl.expand(this.treeControl.dataNodes[0]);
    this.treeControl.expand(this.treeControl.dataNodes[3]);
  }

  /* Get the parent node of a node */
  getParentNode(node: FilterFlatNode): FilterFlatNode | null {
    const currentLevel = this.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }

  /** Whether all the descendants of the node are selected. */
  descendantsAllSelected(node: FilterFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: FilterFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: FilterFlatNode): void {
    console.log(node, 'todoItemSelectionToggle node');
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.forEach(child => this.checklistSelection.isSelected(child));
    this.checkAllParentsSelection(node);
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: FilterFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: FilterFlatNode): void {
    let parent: FilterFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: FilterFlatNode): void {
    console.log(node, 'todoLeafItemSelectionToggle node');
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  hasChild = (_: number, node: FilterFlatNode) => node.expandable;
}
