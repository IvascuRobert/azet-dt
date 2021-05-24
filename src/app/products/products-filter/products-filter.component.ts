import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { IFilterFlatNode, IFilterNode } from 'src/app/shared/interfaces.interface';
import { filterDataTree } from 'src/app/shared/mocks';

@Component({
  selector: 'app-products-filter',
  templateUrl: './products-filter.component.html',
  styleUrls: ['./products-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsFilterComponent implements OnInit {

  @Output() clickFilterItem = new EventEmitter();

  private transformer = (node: IFilterNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level,
      id: node.id,
    };
  }

  treeControl = new FlatTreeControl<IFilterFlatNode>(node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  /** The selection for checklist */
  checklistSelection = new SelectionModel<IFilterFlatNode>(true /* multiple */);

  getLevel = (node: IFilterFlatNode) => node.level;

  constructor() {
    this.dataSource.data = filterDataTree;
  }

  ngOnInit(): void {
    this.treeControl.expand(this.treeControl.dataNodes[0]);
    this.treeControl.expand(this.treeControl.dataNodes[3]);
  }

  /* Get the parent node of a node */
  getParentNode(node: IFilterFlatNode): IFilterFlatNode | null {
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
  descendantsAllSelected(node: IFilterFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.length > 0 && descendants.every(child => {
      return this.checklistSelection.isSelected(child);
    });
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: IFilterFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  todoItemSelectionToggle(node: IFilterFlatNode): void {
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
  checkRootNodeSelection(node: IFilterFlatNode): void {
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
  checkAllParentsSelection(node: IFilterFlatNode): void {
    let parent: IFilterFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  todoLeafItemSelectionToggle(node: IFilterFlatNode): void {
    console.log(node, 'todoLeafItemSelectionToggle node');
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  hasChild = (_: number, node: IFilterFlatNode) => node.expandable;
}
