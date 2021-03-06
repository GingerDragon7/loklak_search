import { NgModule } from '@angular/core';
import { Component, Input, Output } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { MdSlideToggleModule, MaterialModule } from '@angular/material';
import { MediaWallCustomHeaderComponent } from './media-wall-custom-header.component';


describe('MediaWallCustomHeaderComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MdSlideToggleModule.forRoot(),
				MaterialModule
			],
			declarations: [
				MediaWallCustomHeaderComponent
			]
		});

		it('should create an instance', () => {
			const fixture = TestBed.createComponent(MediaWallCustomHeaderComponent);
			const component = fixture.debugElement.componentInstance;
			expect(component).toBeTruthy();
		});
	});
});
