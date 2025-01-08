/**
* @license Apache-2.0
*
* Copyright (c) 2025 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

#include <sys/time.h>
#include "stdlib/stats/base/dists/chisquare/mgf.h"
#include <math.h>
#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define NAME "chisquare-mgf"
#define ITERATIONS 1000000
#define REPEATS 3

static void print_version( void ) {
	printf( "TAP version 13\n" );
}

static void print_summary( int total, int passing ) {
	printf( "#\n" );
	printf( "1..%d\n", total ); // TAP plan
	printf( "# total %d\n", total );
	printf( "# pass  %d\n", passing );
	printf( "#\n" );
	printf( "# ok\n" );
}

static void print_results( double elapsed ) {
	double rate = (double)ITERATIONS / elapsed;
	printf( "  ---\n" );
	printf( "  iterations: %d\n", ITERATIONS );
	printf( "  elapsed: %0.9f\n", elapsed );
	printf( "  rate: %0.9f\n", rate );
	printf( "  ...\n" );
}

static double tic( void ) {
	struct timeval now;
	gettimeofday( &now, NULL );
	return (double)now.tv_sec + (double)now.tv_usec / 1.0e6;
}

static double random_uniform( const double min, const double max ) {
	double v = (double)rand() / ( (double)RAND_MAX + 1.0 );
	return min + ( v * ( max - min ) );
}

static double benchmark( void ) {
	double elapsed;
	double t[ 100 ];
	double k[ 100 ];
	double y;
	double start;
	int i;

	for ( i = 0; i < 100; i++ ) {
		t[ i ] = random_uniform( -0.4, 0.4 );
		k[ i ] = random_uniform( 0.1, 10.0 );
	}

	start = tic();
	for ( i = 0; i < ITERATIONS; i++ ) {
		y = stdlib_base_dists_chisquare_mgf( t[ i % 100 ], k[ i % 100 ] );
		if ( isnan( y ) ) {
			printf( "should not return NaN\n" );
			break;
		}
	}
	elapsed = tic() - start;

	if ( isnan( y ) ) {
		printf( "should not return NaN\n" );
	}
	return elapsed;
}

int main( void ) {
	double elapsed;
	int i;

   	// Use the current time to seed the random number generator:
	srand( time( NULL ) );

	print_version();
	for ( i = 0; i < REPEATS; i++ ) {
		printf( "# c::%s\n", NAME );
		elapsed = benchmark();
		print_results( elapsed );
		printf( "ok %d benchmark finished\n", i + 1 );
	}
	print_summary( REPEATS, REPEATS );
}
